import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";

import details_bg from "@/assets/img/blog/deatils/blog-details-bg.jpg";

type IProps = {
  blog: IBlogDT;
};

export default function BlogDetailsArea({ blog }: IProps) {
  return (
    <section className="tp-blog-details-p p-relative pt-80 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-blog-details-wrap">
              <div className="tp-blog-stories-tag-wrap">
                <a href="#">Education</a>
              </div>
              <h3 className="tp-blog-details-title">{blog.title}</h3>
            </div>

            <div className="tp-blog-details-thumb mb-80">
              <Image
                src={details_bg}
                alt="details-bg"
                style={{ height: "auto" }}
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="tp-postbox-wrapper">
              <div className="tp-postbox-details-text">
                <p className="tp-dropcap text-1">
                  Q Proin faucibus nec mauris a sodales, sed elementum mi
                  tincidunt. Sed eget viverra egestas nisi in consequat. Fusce
                  sodales augue a accumsan. Cras sollicitudin, ipsum eget
                  blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus
                  elementum semper nisi. Aenean vulputate eleifend tellus.
                  Aenean leo ligula, porttitor eu.
                </p>
                <p>
                  Proin faucibus nec mauris a sodales, sed elementum mi
                  tincidunt. Sed eget viverra egestas nisi consequat. Fusce
                  sodales augue a accumsan.{" "}
                </p>

                <p className="text-2">
                  I do not know why she surrendered - exhaustion, probably - but
                  one afternoon in 1980 I was allowed. It was the remake of Jens
                  Lyn with Max von Sydow, you could see the strings in the
                  spaceships when they flew, and it was wonderful . Five friends
                  in the cinema darkness. We only had money for four tickets, so
                  we took turns sitting on each other laps
                </p>
              </div>

              <div className="tp-postbox-details-text pb-25">
                <p>
                  You want to succeed, surround yourself with the right kind of
                  people who will support and encourage you all the way. Be with
                  people who have utmost conviction and patience. The battle is
                  never lost until you’ve abandon your vision. But what if
                  you’re really exhausted physically, mentally, and most of all
                  emotionally? Here are some sources of motivation to prompt.
                </p>
              </div>

              <div className="tp-postbox-details-text pb-35">
                <h4 className="tp-postbox-details-title">
                  Contemporary art daily
                </h4>
                <p>
                  Successful people do not see failures as failures. They see
                  them as important learning lessons. Lessons that are capable
                  of giving them insights to prevent such mistakes from
                  happening again. By adopting this mindset of turning each
                  failure into a learning lesson or opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
