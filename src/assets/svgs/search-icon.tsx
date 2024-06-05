import * as React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';

function SearchIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 20 20" id="search">
      <G
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round">
        <G stroke="#000" stroke-width="4" transform="translate(-1687 -1941)">
          <G transform="translate(1688 1942)">
            <Circle cx="7.5" cy="7.5" r="7.5"></Circle>
            <Path d="M18 18l-5.2-5.2"></Path>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default React.memo(SearchIcon);
