import isPropValid from '@zedvision/emotion-is-prop-valid'

isPropValid('ref')

// $ExpectError
isPropValid()
// $ExpectError
isPropValid({})
// $ExpectError
isPropValid('ref', 'def')
