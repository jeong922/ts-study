import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section>
						<div class="video__holder">
              <iframe class="video__iframe"  
                      width='940'
                      height='529'
                      frameborder='0'
                      allowfullscreen
                      >
              </iframe>
            </div>
						<p class="video__title"></p>
				</section>`);

    const videoElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;

    videoElement.src = this.getformatedUrl(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  private getformatedUrl(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
