function val_CKWLQM_click(ctrlSuffix) {
    var suffix = ctrlSuffix || '';
    var item = $("#val_JGLY_ID").val();
    if (item == 1) {
        function callback1(varReturn) {
            if (varReturn != null && varReturn != '') {
                var sarray = new Array();
                sarray = varReturn.split(';;');
                for (var i = 0; i < sarray.length; i++) {
                    var ctrlId = null;
                    var txt = null;
                    var sarray1 = new Array();
                    sarray1 = sarray[i].split(',,');
                    if (sarray1.length == 2) {
                        if (sarray1[0] == 'WLQC') {
                            ctrlId = 'val_CKWLQM' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (sarray1[0] == 'WLBM') {
                            ctrlId = 'val_CKWLBM' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (sarray1[0] == 'WLMC') {
                            ctrlId = 'val_CKWLMC' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (txt != null) {
                            txt.value = sarray1[1];
                        }
                    }
                }
            }
        }
        currentvalues = 'WLQC;' + document.getElementById('val_CKWLQM' + suffix).value + '|' + 'WLBM;' + document.getElementById('val_CKWLBM' + suffix).value + '|' + 'WLMC;' + document.getElementById('val_CKWLMC' + suffix).value + '|';
        openWin('CommSelect.aspx?PU=5007&MW_ID=444&cv=' + currentvalues, '参考物料全名_弹出窗口', callback1, {
            w: 600,
            h: 500
        });
    } else if (item == 4) {
        function callback2(varReturn) {
            if (varReturn != null && varReturn != '') {
                var sarray = new Array();
                sarray = varReturn.split(';;');
                for (var i = 0; i < sarray.length; i++) {
                    var ctrlId = null;
                    var txt = null;
                    var sarray1 = new Array();
                    sarray1 = sarray[i].split(',,');
                    if (sarray1.length == 2) {
                        if (sarray1[0] == 'WLQC') {
                            ctrlId = 'val_CKWLQM' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (sarray1[0] == ' AREA_NAME') {
                            ctrlId = 'val_CJDQ' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (sarray1[0] == ' PROD_NAME') {
                            ctrlId = 'val_CKWLMC' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (txt != null) {
                            txt.value = sarray1[1];
                        }
                    }
                }
            }
        }
        currentvalues = 'WLQC;' + document.getElementById('val_CKWLQM' + suffix).value + '|' + 'AREA_NAME;' + document.getElementById('val_CJDQ' + suffix).value + '|' + 'PROD_NAME;' + document.getElementById('val_CKWLMC' + suffix).value + '|';
        openWin('CommSelect.aspx?PU=5008&MW_ID=444&cv=' + currentvalues, '参考物料全名_弹出窗口', callback2, {
            w: 600,
            h: 500
        });
    } else if (item == 5) {
        function callback3(varReturn) {
            if (varReturn != null && varReturn != '') {
                var sarray = new Array();
                sarray = varReturn.split(';;');
                for (var i = 0; i < sarray.length; i++) {
                    var ctrlId = null;
                    var txt = null;
                    var sarray1 = new Array();
                    sarray1 = sarray[i].split(',,');
                    if (sarray1.length == 2) {
                        if (sarray1[0] == 'WLQC') {
                            ctrlId = 'val_CKWLQM' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (sarray1[0] == 'SCCJ') {
                            ctrlId = 'val_CJDQ' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (sarray1[0] == 'CPPH') {
                            ctrlId = 'val_CKCPPH' + suffix;
                            txt = document.getElementById(ctrlId);
                        }
                        if (txt != null) {
                            txt.value = sarray1[1];
                        }
                    }
                }
            }
        }
        currentvalues = 'WLQC;' + document.getElementById('val_CKWLQM' + suffix).value + '|' + 'SCCJ;' + document.getElementById('val_CJDQ' + suffix).value + '|' + 'CPPH;' + document.getElementById('val_CKWLMC' + suffix).value + '|';
        openWin('CommSelect.aspx?PU=5009&MW_ID=444&cv=' + currentvalues, '参考物料全名_弹出窗口', callback3, {
            w: 600,
            h: 500
        });
    }
}