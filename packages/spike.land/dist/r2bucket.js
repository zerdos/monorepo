export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const key = url.pathname.slice(1);
        switch (request.method) {
            case "PUT":
                await env.r2_bucket.put(key, request.body);
                return new Response(`Put ${key} successfully!`);
            case "GET":
                const object = await env.r2_bucket.get(key);
                if (object === null) {
                    return new Response("Object Not Found", { status: 404 });
                }
                const headers = new Headers();
                object.writeHttpMetadata(headers);
                headers.set("etag", object.httpEtag);
                return new Response(object.body, {
                    headers,
                });
            case "DELETE":
                await env.r2_bucket.delete(key);
                return new Response("Deleted!");
            default:
                return new Response("Method Not Allowed", {
                    status: 405,
                    headers: {
                        Allow: "PUT, GET, DELETE",
                    },
                });
        }
    },
};
