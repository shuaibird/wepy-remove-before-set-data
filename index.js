function WepyRemoveBeforeSetData({ enabled } = {}) {
  return function() {
    if (!enabled) return;
    this.register('build-vendor', (vendor) => {
      const { outputCode: rawOutputCode, targetFile } = vendor;

      if (!/before-setData/.test(rawOutputCode)) {
        return vendor;
      }

      const linesOfRaw = rawOutputCode.split('\n');
      const targetLine = linesOfRaw.findIndex((line) => /before-setData/.test(line));
      const outputCode = [
        ...linesOfRaw.slice(0, targetLine - 1),
        ...linesOfRaw.slice(targetLine + 2),
      ].join('\n');

      return { outputCode, targetFile };
    });
  };
}

module.exports = WepyRemoveBeforeSetData;
