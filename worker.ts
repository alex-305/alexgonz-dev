interface AssetEnvironment {
  ASSETS: { fetch(request: Request): Promise<Response> }
}

export default {
  fetch(request: Request, env: AssetEnvironment): Response | Promise<Response> {
    const url = new URL(request.url)

    // Cloudflare adds cf-ray to edge requests, but Wrangler's local preview does not.
    if (url.protocol === 'http:' && request.headers.has('cf-ray')) {
      url.protocol = 'https:'
      return Response.redirect(url.href, 301)
    }

    return env.ASSETS.fetch(request)
  },
}
