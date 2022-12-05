const breakPoint = {
  sm: 575,
  md: 768,
  lg: 1024,
  xl: 1200,
};

const media = {
  up: function (bpn) {
    return `
          @media screen and (min-width: ${breakPoint[bpn]}px)
        `;
  },
  down: function (bpn) {
    return `
          @media screen and (max-width: ${breakPoint[bpn]}px)
        `;
  },
  customUp: function (bpn) {
    return `
          @media screen and (min-width: ${bpn}px)
        `;
  },
  customDown: function (bpn) {
    return `
          @media screen and (max-width: ${bpn}px)
        `;
  },
};

export default media;
