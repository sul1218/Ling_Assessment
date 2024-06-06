import * as React from 'react';
import Svg, {G, Path, Polygon} from 'react-native-svg';

function ChevronIcon() {
  return (
    <Svg
      width={9}
      height={15}
      viewBox="0 0 7 12"
      transform={[{rotate: '90deg'}]}>
      <G
        id="Icons"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G id="Rounded" transform="translate(-142.000000, -3438.000000)">
          <G id="Navigation" transform="translate(100.000000, 3378.000000)">
            <G
              id="-Round-/-Navigation-/-chevron_left"
              transform={'translate(34.000000, 54.000000)'}>
              <G>
                <Polygon id="Path" points="0 0 24 0 24 24 0 24"></Polygon>
                <Path
                  d="M14.71,6.71 C14.32,6.32 13.69,6.32 13.3,6.71 L8.71,11.3 C8.32,11.69 8.32,12.32 8.71,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.1,16.91 15.1,16.28 14.71,15.89 L10.83,12 L14.71,8.12 C15.1,7.73 15.09,7.09 14.71,6.71 Z"
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

export default React.memo(ChevronIcon);
