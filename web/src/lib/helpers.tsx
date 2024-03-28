// Replaces YouTube <a> links with <iframe> embeds

// This replace is pretty basic in that it assumes the link is in the short URL
// form like https://youtu.be/abc123 and always inside of an
// <a class="embed-card"> tag from Hashnode.
export const replaceYouTubeLinks = (html: string) => {
  try {
    const youTubeRegex =
      /<a class="embed-card" href="https:\/\/youtu\.be\/(.*?)".*?<\/a>/g
    const youTubeIframe = `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/$1?rel=0&modestbranding=1" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`

    return html.replace(youTubeRegex, youTubeIframe)
  } catch (e) {
    console.error(e)
    return html
  }
}
