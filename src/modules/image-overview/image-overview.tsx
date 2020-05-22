import React, { FC } from "react";
import { ModuleWrapper } from "../../components/module-wrapper/module-wrapper";
import Masonry from "react-masonry-css";

import './image-overview.scss';

export const ImageOverview: FC = () => {
    return (
      <ModuleWrapper>
          <div className="artCollection">
              <Masonry
                  breakpointCols={2}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=700&height=500&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=700&height=700&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=500&height=500&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=500&height=700&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=700&height=700&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=700&height=500&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=500&height=700&style=triangles&gap=100"/>
                  </div>
                  <div className="art">
                      <img src="https://generative-placeholders.glitch.me/image?width=500&height=500&style=triangles&gap=100"/>
                  </div>
              </Masonry>
          </div>
      </ModuleWrapper>
    );
};