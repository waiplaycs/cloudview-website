export const reportConversion = () => {
  const win = window as any;
  if (typeof win !== 'undefined' && win.gtag) {
    win.gtag('event', 'conversion', {
      'send_to': 'AW-17999402950/jXrrCIKh_4QcEMav5IZD',
      'value': 1.0,
      'currency': 'HKD'
    });
  }
};
