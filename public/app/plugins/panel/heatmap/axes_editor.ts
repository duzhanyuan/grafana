///<reference path="../../../headers/common.d.ts" />

import kbn from 'app/core/utils/kbn';

export class AxesEditorCtrl {
  panel: any;
  panelCtrl: any;
  unitFormats: any;
  logScales: any;
  dataFormats: any;

  /** @ngInject */
  constructor($scope, uiSegmentSrv) {
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.unitFormats = kbn.getUnitFormats();

    this.logScales = {
      'linear': 1,
      'log (base 2)': 2,
      'log (base 10)': 10,
      'log (base 32)': 32,
      'log (base 1024)': 1024
    };

    this.dataFormats = {
      'Time series': 'timeseries',
      'Time series buckets': 'tsbuckets'
    };
  }

  setUnitFormat(subItem) {
    this.panel.yAxis.format = subItem.value;
    this.panelCtrl.render();
  }
}

/** @ngInject */
export function axesEditor() {
  'use strict';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/heatmap/partials/axes_editor.html',
    controller: AxesEditorCtrl,
  };
}
