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

// Replaces YouTube <a> links with <iframe> embeds

// This replace is pretty basic in that it assumes the link is in the short URL
// form like https://youtu.be/abc123 and always inside of an
// <a class="embed-card"> tag from Hashnode.
export const embedTweets = (html: string) => {
  try {
    const tweetRegex =
      /<a class="embed-card" href="https:\/\/(x|twitter)\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+).*?<\/a>/g
    const tweetEmbed = `<blockquote class="twitter-tweet text-xs text-secondary-400" data-dnt="true">Loading Tweet...<a href="https://twitter.com/$2/status/$3?ref_src=twsrc%5Etfw"></a></blockquote>`

    return html.replace(tweetRegex, tweetEmbed)
  } catch (e) {
    console.error(e)
    return html
  }
}

export const addTwitterWidget = () => {
  const script = document.createElement('script')
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
  document.getElementsByClassName('twitter-tweet')[0]?.appendChild(script)
}
