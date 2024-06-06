import * as React from 'react';
import Svg, {G, Path, Polygon} from 'react-native-svg';

function ChevronDownIcon() {
  return (
    <Svg
      width="9px"
      height="15px"
      viewBox="0 0 7 12"
      transform={[{rotate: '90deg'}]}>
      <G
        id="Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <G id="Rounded" transform="translate(-619.000000, -3438.000000)">
          <G id="Navigation" transform="translate(100.000000, 3378.000000)">
            <G
              id="-Round-/-Navigation-/-chevron_right"
              transform="translate(510.000000, 54.000000)">
              <G>
                <Polygon id="Path" points="0 0 24 0 24 24 0 24"></Polygon>
                <Path
                  d="M9.29,6.71 C8.9,7.1 8.9,7.73 9.29,8.12 L13.17,12 L9.29,15.88 C8.9,16.27 8.9,16.9 9.29,17.29 C9.68,17.68 10.31,17.68 10.7,17.29 L15.29,12.7 C15.68,12.31 15.68,11.68 15.29,11.29 L10.7,6.7 C10.32,6.32 9.68,6.32 9.29,6.71 Z"
                  id="🔹-Icon-Color"
                  fill="#1D1D1D"></Path>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default React.memo(ChevronDownIcon);
