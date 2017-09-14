define(function(){return'{{* 通用错误视图 *}}{{ target: failure }}<div>this is fail!!!</div>error !!!!{{ /target }}{{** @file 通用输入组件* @author sushuang(sushuang@baidu.com)* @date 2014-05*}}{{* gadget 切换器 *}}{{ target: iptGadgetSwitch }}<div>this is gadget switch!!!</div>{{ /target }}{{* 开关 *}}{{ target: iptSwitchButton }}<div>this is switch button!!!</div>{{ /target }}{{* 调节器 *}}{{ target: iptSpinner }}<div>this is spinner!!!</div>{{ /target }}{{* 文本输入器 *}}{{ target: iptTextInput }}<div>this is text input!!!</div>{{ /target }}{{* 超链接输入器 *}}{{ target: iptLinkInput }}<div>this is link input!!!</div>{{ /target }}{{* css 盒模型参数输入器 *}}{{ target: iptBoxParamInput }}<div>this is box param input!!!</div>{{ /target }}{{* 文字样式输入器 *}}{{ target: iptTextStyleInput }}<div>this is text style input !!!</div>{{ /target }}{{* 半径输入器 *}}{{ target: iptRadiusInput }}<div>this is radius input !!!</div>{{ /target }}{{* 图表类型输入器 *}}{{ target: iptChartTypeInput }}<div>this is chart type input !!!</div>{{ /target }}{{* 上传组件 *}}{{ target: uploader }}<span class="dtm-upld-btn fileinput-button"><i></i><span>${viewModel.uploadBtnNormal|html}</span><input type="file" name="file"></span>{{ /target }}{{ target: uploaderMask }}<div class="dtm-upld-pn" style="display:none"><div class="dtm-upld-text">${lang.string.uploading|html}</div><div class="dtm-upld-cancel dtm-btn">${lang.string.uploadBtnCancel|html}</div><div class="dtm-upld-progress"><em></em></div></div>{{ /target }}{{* 用户账号/登陆/注册 *}}{{ target: loginHeader }}<div></div>{{ /target }}{{ target: userInfoHeader }}<div>${uname|html}&nbsp;&nbsp;|&nbsp;&nbsp;<a href="${logoutUrl|html}">退出</a></div>{{ /target }}{{*-- 图选择面板 --*}}{{ target: mfChartSelectPanel }}<div class="dtm-addchtpn"><div data-cpt="type: \'tab\',name: \'tab\',viewModel: {currentTab: lib.ob(\'${viewModel.tabs[0].key|html}\'),baseCss: \'dtm-tab0\',tabAttr: \'cpt-tab0\',conAttr: \'cpt-con0\'}"><ul class="dtm-tab0">{{ for: ${viewModel.tabs} as ${tabItem} }}<li data-cpt-tab0="${tabItem.key|html}">${tabItem.item.text|html}</li>{{ /for }}</ul>{{ for: ${viewModel.tabs} as ${tabItem} }}<div data-cpt-con0="${tabItem.key|html}">{{ if: ${tabItem.item.showMessage} }}<div class="dtm-msg">${tabItem.item.showMessage|html}</div>{{ else }}{{ for: ${tabItem.item.molds} as ${moldItem}, ${moldIndex} }}<div class="dtm-con-item" data-tab-key="${tabItem.key|html}" data-mold-index="${moldIndex}"><img src="${moldItem.pic|html}" /><h3>${moldItem.title|html}</h3><em>${moldItem.desc|html}</em></div>{{ /for }}{{ /if }}</div>{{ /for }}</div></div>{{ /target }}{{*-- 插入文本类型选择面板 --*}}{{ target: mfTextSelectPanel }}<div class="dtm-addtextpn"><p class="dtm-addtextpn-title">${lang.string.addText.hint}</p><table><tbody><tr>{{ for: ${viewModel.typeList} as ${item} }}<td><div class="text-type-wrap" data-mold-id="${item.type}"><div class="text-type-${item.type} text-type-icon"></div><div>${item.text}</div></div></td>{{ /for }}</tr></tbody></table></div>{{ /target }}{{ target: wave }}<div id="wave-main"></div>{{ /target }}{{*-- 窗口的外壳 --*}}{{ target: winPanel }}<div class="dtm-winpn"><div class="dtm-close-cross">X</div><div class="dtm-winpn-con"></div></div>{{ /target }}{{*-- 图选择面板 --*}}{{ target: dialogPanel }}<div class="dtm-dlg"><div class="dtm-con">&nbsp;</div><div class="dtm-btns">{{ for: ${viewModel.btnViewModels} as ${vm}, ${index} }}<div data-cpt="type: \'button\',name: \'btns[${index}]\',viewModelGet: \'btnViewModels[${index}]\'"></div>{{ /for }}</div></div>{{ /target }}{{ target: waveLogo }}<a href="/"><img class="dtm-wvlogo" src="${url.UI_CODE_ROOT|html}/common/core/img/wave-logo.png" /></a>{{ /target }}{{ target: userAndLinkHead }}<div class="dtm-user-info"></div><a class="dtm-echarts-logo" target="_blank" href="http://echarts.baidu.com"><img src="${url.UI_CODE_ROOT|html}/common/core/img/echarts-logo.png"></img></a>{{ /target }}{{*-- 作品集 --*}}{{ target: gallery }}<div class="dtm-wvhdr dtm-glyhdr-area">{{ import: waveLogo }}{{ import: userAndLinkHead }}</div><div data-cpt="type: \'button\',name: \'createProdBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-create-btn\']}"></div><div class="dtm-glyprodli dtm-tabh" data-cpt="type: \'tab\',name: \'tab\',viewModel: {currentTab: viewModel.listTab,baseCss: \'dtm-tabh\',tabAttr: \'cpt-tabh\',conAttr: \'cpt-conh\'}"><ul class="dtm-tabh-h"><li data-cpt-tabh="myProd">${lang.string.prodListTab.myProd|html}</li><li data-cpt-tabh="publicProd">${lang.string.prodListTab.publicProd|html}</li></ul><div data-cpt-conh="myProd"><div data-cpt="type: \'foreach\',name: \'myProdList\',viewModelGet: \'con.myProd.list\',itemType: \'wave/gallery/ProdItem\'"></div></div><div data-cpt-conh="publicProd"><div data-cpt="type: \'foreach\',name: \'publicProdList\',viewModelGet: \'con.publicProd.list\',itemType: \'wave/gallery/ProdItem\'"></div></div></div><div class="gallery-pagination"></div>{{ /target }}{{*-- 一个个的作品块 --*}}{{ target: galleryProdItem }}<a href="#/manufacture/${viewModel.prodId}" class="dtm-thumbnail" style="background-image:url(${viewModel.thumbnail})"></a><a href="#/manufacture/${viewModel.prodId}" class="dtm-title"  data-prodid="${viewModel.prodId}"></a>{{ if: ${viewModel.audit} == ${constant.Audit.FAIL} }}<a href="#/manufacture/${viewModel.prodId}" class="dtm-audit-fail">${lang.string.audit.fail}</a>{{ /if }}<div class="dtm-btns">{{ for: ${viewModel.prodItemBtnDefs} as ${btnDef} }}<div data-cpt="type: \'button\', name: \'${btnDef.name|html}\', text: lib.ob(\'${btnDef.text|html}\')" data-op-key="${btnDef.opKey|html}"></div>{{ /for }}</div>{{ /target }}{{*-- 一个个的作品块（有缩略图，未采用，暂时保留） --*}}{{ target: galleryProdItemWithBrief }}<img src="${url.UI_CODE_ROOT|html}/common/core/img/prod-item-0.png" /><div class="dtm-title"  data-prodid="${viewModel.prodId}"></div><div class="dtm-btns" style="display:none">{{ for: ${viewModel.prodItemBtnDefs} as ${btnDef} }}<div data-cpt="type: \'button\', name: \'${btnDef.name|html}\', text: lib.ob(\'${btnDef.text|html}\')" data-op-key="${btnDef.opKey|html}"></div>{{ /for }}</div>{{ /target }}{{*-- 作品列表为空时的视图 --*}}{{ target: galleryEmpty }}empty TOOD{{ /target }}{{*-- 制作视图 --*}}{{ target: manufacture }}<div class="dtm-wvhdr dtm-mfhdr-area">{{ import: waveLogo }}<div class="dtm-mfhdr-btns"><div data-cpt="type: \'button\',name: \'myProdBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-head-btn\']}"></div><div class="dtm-btn dtm-head-btn dtm-add-wgt-btn"></div><div data-cpt="type: \'button\',name: \'saveBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-head-btn\', \'dtm-save-btn\']}"></div><div data-cpt="type: \'button\',name: \'paperSettingBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-head-btn\', \'dtm-pprst-btn\']}"></div><div data-cpt="type: \'button\',name: \'publishBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-head-btn\', \'dtm-pub-btn\']}"></div><div data-cpt="type: \'button\',name: \'previewBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-head-btn\', \'dtm-preview-btn\']}"></div></div>{{ import: userAndLinkHead }}</div><div class="dtm-mf-paper-box"><h1 contenteditable="true" class="dtm-prod-title"></h1><div data-cpt="type: \'wave/manufacture/Paper\',name: \'paper\',viewModel: {residenceHandle: viewModel.residenceHandle}"></div></div><div data-cpt="type: \'wave/manufacture/ChartEditor\',name: \'chartEditor\',viewModel: {residenceHandle: viewModel.residenceHandle,panelOpenStatus: viewModel.panelOpenStatusMap[constant.ResidentPanelName.CHART_EDITOR]}" style="display:none"></div><div data-cpt="type: \'wave/manufacture/PaperConfigurer\',name: \'paperConfigurer\',viewModel: {residenceHandle: viewModel.residenceHandle,panelOpenStatus: viewModel.panelOpenStatusMap[constant.ResidentPanelName.PAPER_CONFIGURER]}" style="display:none"></div><div data-cpt="type: \'wave/manufacture/ImageConfigurer\',name: \'imageConfigurer\',viewModel: {residenceHandle: viewModel.residenceHandle,panelOpenStatus: viewModel.panelOpenStatusMap[constant.ResidentPanelName.IMAGE_CONFIGURER]}" style="display:none"></div><div data-cpt="type: \'wave/manufacture/FormatTextConfigurer\',name: \'formatTextConfigurer\',viewModel: {residenceHandle: viewModel.residenceHandle,panelOpenStatus: viewModel.panelOpenStatusMap[constant.ResidentPanelName.FORMAT_TEXT_CONFIGURER]}" style="display:none"></div><div data-cpt="type: \'wave/manufacture/PaperNavigator\',name: \'paperNavigator\',viewModel: {residenceHandle: viewModel.residenceHandle,panelOpenStatus: viewModel.panelOpenStatusMap[constant.ResidentPanelName.PAPER_NAVIGATOR]}" style="display:none"></div><div data-cpt="type: \'button\',name: \'paperNavBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-pprnav-btn\']}"></div>{{ /target }}{{*-- 页首板--增加wgt --*}}{{ target: mfAddSelectPanel }}<div class="dtm-addsltpn"><div data-cpt="type: \'button\',name: \'addChart\',viewModel: {css: [\'dtm-btn\', \'dtm-add-slt-btn\'],text: lib.ob(lang.string.addSelectPanel.addChart)}"></div><div data-cpt="type: \'button\',name: \'addText\',viewModel: {css: [\'dtm-btn\', \'dtm-add-slt-btn\'],text: lib.ob(lang.string.addSelectPanel.addText)}"></div><div data-cpt="type: \'button\',name: \'addPicture\',viewModel: {css: [\'dtm-btn\', \'dtm-add-slt-btn\'],text: lib.ob(lang.string.addSelectPanel.addPicture)}"></div></div>{{ /target }}{{*-- 画布 --*}}{{ target: mfPaper }}<div></div>{{ /target }}{{*-- widget 操作集合 --*}}{{ target: mfPagerOpDataEditBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'数据编辑\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpConfEditBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'参数调整\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpSelfEditBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'设置\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpDrapBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'<em></em><i></i>拖动\'), dontEncodeHTML: true" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpLayMannerBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'置\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpResizeBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'尺寸调整\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpRemoveBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'删除\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ target: mfPagerOpCodeBtn }}<div data-op-type="${viewModel.opType}" data-cpt="type: \'button\', name: \'dwgts.${viewModel.wgtId}.operations.${viewModel.opType}\', text: lib.ob(\'显示代码\')" class="cpt-mf-paper-op-${viewModel.opType}"></div>{{ /target }}{{*-- 图编辑器 --*}}{{ target: chartEditor }}<div data-cpt="type: \'button\',name: \'closeBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-close-btn\'],text: lib.ob(lang.string.closeBtnText)}"></div><div data-cpt="type: \'tab\',name: \'tab\',viewModel: {currentTab: lib.ob(\'dataEditor\'),baseCss: \'dtm-tabh\',tabAttr: \'cpt-tabh\',conAttr: \'cpt-conh\'}" class="dtm-tabh"><ul class="dtm-tabh-h"><li data-cpt-tabh="dataEditor">${lang.html.chartEditor.tabDataEditor}</li><li data-cpt-tabh="chartConfigurer">${lang.html.chartEditor.tabChartConfigurer}</li></ul><div data-cpt="type: \'wave/dataEditor/DataEditor\',name: \'dataEditor\',viewModel: {panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}" class="dtm-conh-data-editor" data-cpt-conh="dataEditor"></div><div data-cpt="type: \'wave/chartConfigurer/ChartConfigurer\',name: \'chartConfigurer\',viewModel: {panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}" class="dtm-conh-chart-configurer" data-cpt-conh="chartConfigurer"></div></div>{{ /target }}{{*-- paper设置面板 --*}}{{ target: paperConfigurer }}<div data-cpt="type: \'button\',name: \'closeBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-close-btn\'],text: lib.ob(lang.string.closeBtnText)}"></div><div class="dtm-conh dtm-edtcom-pn"><div data-cpt="type: \'scrollPanel\',name: \'scrollPanel\',viewModel: {css: \'dtm-pprcfg-sp\'}"><div data-cpt-sclpn-con>{{ for: ${viewModel.subViewModelList} as ${vm}, ${index} }}<div class="dtm-edtcom-row dtm-edtpn-row" data-cpt="type: \'${vm.dpct.ui}\',name: \'items.${vm.dpct.key}\',viewModel: viewModel.subViewModelList[${index}]"></div>{{ /for }}</div></div></div><div class="dtm-residence-mask"></div>{{ /target }}{{*-- 多paper的浏览和操作 --*}}{{ target: paperNavigator }}<div class="dtm-conh dtm-edtcom-pn"><div class="dtm-count-info"></div><div data-cpt="type: \'scrollPanel\',name: \'scrollPanel\',viewModel: {css: \'dim-sclpn\',conAttr: \'ppr-nav-scroll-con\'}"><div data-cpt="type: \'foreach\',name: \'paperShotList\',viewModelGet: \'paperShotViewModelList\',itemTplTarget: \'paperShotItem\',itemConfigAttr: \'itemConfig\'"class="dtm-pprnav-shot-box"data-ppr-nav-scroll-con></div></div></div><div class="dtm-residence-mask"></div><div class="dtm-pprnav-item-ops"><div data-cpt="type: \'button\',name: \'closeBtn\',text: lib.ob(\'\')"class="dtm-pprnav-item-op icon-pullright"></div><div class="dtm-pprnav-item-op-line"></div><div data-cpt="type: \'button\',name: \'ops.add\',text: lib.ob(\'\')"class="dtm-pprnav-item-op icon-add"></div><div data-cpt="type: \'button\',name: \'ops.remove\',text: lib.ob(\'\')"class="dtm-pprnav-item-op icon-shanchu"></div><div data-cpt="type: \'button\',name: \'ops.up\',text: lib.ob(\'\')"class="dtm-pprnav-item-op icon-icmoveup"></div><div data-cpt="type: \'button\',name: \'ops.down\',text: lib.ob(\'\')"class="dtm-pprnav-item-op icon-icmovedown"></div></div>{{ /target }}{{*-- 多paper的浏览 --*}}{{ target: paperShotItem }}<div class="dtm-pprnav-item dtstl-scale" data-dtstl-scale="marginTop:12px;marginBottom:12px;"><div class="dtm-pprnav-item-con"></div><div class="dtm-pprnav-item-mask dtstl-scale" data-dtstl-scale="borderWidth:5px;top:-5px;left:-5px;" data-paper-id="${viewModel.itemTplParam.paperId}"></div><div class="dtm-pprnav-item-num dtstl-scale" data-dtstl-scale="fontSize:12px;left:-26px;width:26px;"></div></div>{{ /target }}{{*-- image设置面板 --*}}{{ target: imageConfigurer }}<div data-cpt="type: \'button\',name: \'closeBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-close-btn\'],text: lib.ob(lang.string.closeBtnText)}"></div><div class="dtm-conh dtm-edtcom-pn">{{ for: ${viewModel.subViewModelList} as ${vm}, ${index} }}<div class="dtm-edtcom-row" data-cpt="type: \'${vm.dpct.ui}\',name: \'items.${vm.dpct.key}\',viewModel: viewModel.subViewModelList[${index}]"></div>{{ /for }}</div><div class="dtm-residence-mask"></div>{{ /target }}{{*-- formatText设置面板 --*}}{{ target: formatTextConfigurer }}<div data-cpt="type: \'button\',name: \'closeBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-close-btn\'],text: lib.ob(lang.string.closeBtnText)}"></div><div class="dtm-conh dtm-edtcom-pn">{{ for: ${viewModel.subViewModelList} as ${vm}, ${index} }}<div class="dtm-edtcom-row" data-cpt="type: \'${vm.dpct.ui}\',name: \'items.${vm.dpct.key}\',viewModel: viewModel.subViewModelList[${index}]"></div>{{ /for }}</div>{{ /target }}{{ target: previewPanel }}<div class="dtm-preview-wrapper"><iframe id="previewIframe" src="${viewModel.prodURL}" style="width:${viewModel.prodWidth}px;"></iframe></div>{{ /target }}{{ target: codePanel }}<div class="dtm-code-title">ECharts配置代码</div><div class="dtm-code-box"></div>{{ /target }}{{ target: pubMaster }}<div class="dtm-pubpn"><h2 class="dtm-pubpn-title">{{ block: title }}{{ /block }}</h2>{{ block: main }}{{ /block }}</div>{{ /target }}{{ target: pubFoot }}<div class="dtm-pubpn-foot"><a class="dtm-pubpn-cancel">${lang.string.publish.cancelShare}</a><div data-cpt="type: \'button\',name: \'previewBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-pubpn-preview\'],text: lib.ob(lang.string.publish.preview)}"></div></div>{{ /target }}{{*-- mode选择面板 --*}}{{ target: modePanel(master=pubMaster) }}{{ block: title }}${lang.string.publish.title}{{ /block }}{{ block: main}}<div class="dtm-pubpn-mode"><div data-cpt="type: \'button\',name: \'publicPubBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-public-btn\'],tooltip: \'sb\',text: lib.ob(lang.string.publish.publicPublish)}"></div><div data-cpt="type: \'button\',name: \'privatePubBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-private-btn\'],text: lib.ob(lang.string.publish.privatePublish)}"></div></div>{{ /block }}{{ /target }}{{*-- 公开分享面板 --*}}{{ target: publicPanel(master=pubMaster) }}{{ block: title }}${lang.string.publish.already}${lang.string.publish.publicPublish}{{ /block }}{{ block: main}}<div class="dtm-pubpn-public"><div class="dtm-pubpn-hint">${lang.string.publish.succCreateUrl}</div><div class="dtm-produrl"><input type="text" spellingcheck="false" readonly="readonly"><div data-cpt="type: \'button\',name: \'copyUrl\',viewModel: {css: [\'dtm-btn\', \'dtm-cpbtn\'],text: lib.ob(lang.string.publish.copyURLBtn)}"></div><div class="dtm-pubpn-share"><span class="dtm-pubpn-share-hint">${lang.string.publish.publicShareHint}</span><div class="bdsharebuttonbox dtm-pubpn-share-box" data-tag="share_1"><a class="bds_tsina" data-cmd="tsina"></a><a class="bds_weixin" data-cmd="weixin"></a><a class="bds_sqq" data-cmd="sqq"></a><a class="bds_youdao" data-cmd="youdao"></a></div></div></div><div class="dtm-embed"><div class="dtm-embed-label"><a class="dtm-embed-more-setting">${lang.string.publish.moreSetting}</a><span class="dtm-embed-paper-num-box">${lang.string.publish.embedLabelPre}<div data-cpt="type: \'input/TextInput\',name: \'paperNumberInput\',viewModel: {value: viewModel.paperNumber,css: \'dtm-embed-paper-num\',mouseEnterSelect: true}"></div><span class="dtm-embed-paper-num-desc"></span></span>${lang.string.publish.embedLabel}</div><div class="dtm-embed-setting"><div class="dtm-embed-line">${lang.string.publish.widthSetting}<div data-cpt="type: \'input/CheckButton\',name: \'embedWidthMode\',viewModelGet: \'embedWidthModeViewModel\'"></div></div><div class="dtm-embed-line">${lang.string.publish.heightSetting}<div data-cpt="type: \'input/CheckButton\',name: \'embedHeightMode\',viewModelGet: \'embedHeightModeViewModel\'"></div></div></div><textarea spellingcheck="false" readonly="readonly"></textarea><div class="dtm-embed-buttons"><div data-cpt="type: \'button\',name: \'copyCode\',viewModel: {css: [\'dtm-btn\', \'dtm-cpbtn\'],text: lib.ob(lang.string.publish.copyCodeBtn)}"></div><a class="dtm-embed-smp" target="_blank" href="#">${lang.string.publish.sampleBtn}</a></div></div>{{ import: pubFoot }}</div>{{ /block }}{{ /target }}{{ target: privatePanel(master=pubMaster) }}{{ block: title }}${lang.string.publish.already}${lang.string.publish.privatePublish}{{ /block }}{{ block: main}}<div class="dtm-pubpn-private"><div class="dtm-pubpn-hint">${lang.string.publish.succCreateUrl}</div><div class="dtm-produrl"><input class="dtm-input-url" type="text" spellingcheck="false" readonly="readonly"><div data-cpt="type: \'button\',name: \'copyUrl\',viewModel: {css: [\'dtm-btn\', \'dtm-cpbtn\'],text: lib.ob(lang.string.publish.copyPriBtn)}"></div><div class="dtm-pubpn-share"><span>${lang.string.publish.privateShareHint}</span></div><div class="dtm-pubpn-code"><label>${lang.string.publish.shareCode}</label><input class="dtm-input-code" type="text" spellingcheck="false" readonly="readonly"><a class="dtm-code-modify">${lang.string.publish.modify}</a><a class="dtm-code-ok">${lang.string.publish.ok}</a><a class="dtm-code-cancel">${lang.string.publish.cancel}</a><span class="dtm-code-error"></span></div></div>{{ import: pubFoot }}</div>{{ /block }}{{ /target }}{{*--嵌入用户页面的代码片段.注意，此段代码与 data-talk-service/protected/views/prodTpls/embedCode.php 一致。两方须同步更改。--*}}{{ target: publishEmbedCode }}<script data-dtprod="${viewModel.dtAttr|raw}" charset="utf-8" src="${viewModel.url}"></script>{{ /target }}{{*-- 图编辑面板 --*}}{{ target: chartConfigurer }}<div data-cpt="type: \'tab\',name: \'tab\',viewModel: {currentTab: lib.ob(\'${viewModel.dpct.tab[0].key}\'),baseCss: \'dtm-tab0\',tabAttr: \'cpt-tab0\',conAttr: \'cpt-con0\'}"><ul class="dtm-tab0">{{ for: ${viewModel.dpct.tab} as ${item} }}<li data-cpt-tab0="${item.key}">${item.text|html}</li>{{ /for }}</ul>{{ for: ${viewModel.dpct.tab} as ${item}, ${tabIndex} }}<div data-cpt-con0="${item.key}" data-cpt="type: viewModel.dpct.con.${item.key}.ui,name: \'con.${item.key}\',viewModel: {dpct: viewModel.dpct.con.${item.key},panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /for }}</div><div class="dtm-residence-mask"></div>{{ /target }}{{*-- 子tab编辑板 --*}}{{ target: chartConfSubTabPanel }}<div data-cpt="type: \'tab\',name: \'tab\',viewModel: {baseCss: \'dtm-tab1\',tabAttr: \'cpt-tab1\',conAttr: \'cpt-con1\',currentTab: lib.ob(\'${viewModel.dpct.tab[0].key}\')}"><div class="dtm-tab1">{{ for: ${viewModel.dpct.tab} as ${item} }}<div data-cpt-tab1="${item.key}">${item.text|html}</div>{{ /for }}</div>{{ for: ${viewModel.dpct.tab} as ${item}, ${tabIndex} }}<div data-cpt-con1="${item.key}" data-cpt="type: viewModel.dpct.con.${item.key}.ui,name: \'con.${item.key}\',viewModel: {dpct: viewModel.dpct.con.${item.key},panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /for }}</div>{{ /target }}{{*-- series tab编辑板 --*}}{{ target: chartConfSeriesTabPanel }}<div data-cpt="type: \'tab\',name: \'tab\',viewModel: {baseCss: \'dtm-tab1\',tabAttr: \'cpt-tab1\',conAttr: \'cpt-con1\',currentTab: lib.ob(\'${viewModel.dpct.defaultTabKey}\')}"><div class="dtm-sertb-up"></div><div class="dtm-tab1"><div class="dtm-tab1-inner">{{ for: ${viewModel.dpct.tab} as ${item} }}<div data-cpt-tab1="${item.key}">${item.text|html}</div>{{ /for }}<div data-cpt="type: \'foreach\',name: \'seriesTabList\',viewModelGet: \'seriesTabListViewModel\',itemConfigAttr: \'itemConfig\'"></div></div></div><div class="dtm-sertb-down"></div>{{ for: ${viewModel.dpct.tab} as ${item}, ${tabIndex} }}<div data-cpt-con1="${item.key}" data-cpt="type: viewModel.dpct.con.${item.key}.ui,name: \'con.${item.key}\',viewModel: {dpct: viewModel.dpct.con.${item.key},panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /for }}<div data-cpt="type: \'foreach\',name: \'seriesConList\',viewModelGet: \'seriesConListViewModel\',itemConfigAttr: \'itemConfig\'"></div></div>{{ /target }}{{*-- series的tab头 --*}}{{ target: chartConfSeriesTabItem }}<div data-cpt-tab1="${viewModel.itemTplParam.key}">${viewModel.itemTplParam.text|html}</div>{{ /target }}{{*-- series的tab身 --*}}{{ target: chartConfSeriesConItem }}<div data-cpt-con1="${viewModel.itemTplParam.key}"></div>{{ /target }}{{*-- 内部series tab编辑板 --*}}{{ target: chartConfSeriesEditPanel }}<div data-cpt="type: \'tab\',name: \'tab\',viewModel: {baseCss: \'dtm-tab2\',tabAttr: \'cpt-tab2\',conAttr: \'cpt-con2\',currentTab: lib.ob(\'${viewModel.dpct.tab[0].key}\')}"><ul class="dtm-tab2">{{ for: ${viewModel.dpct.tab} as ${item} }}<li data-cpt-tab2="${item.key}">${item.text}</li>{{ /for }}</ul>{{ for: ${viewModel.dpct.tab} as ${item}, ${tabIndex} }}<div data-cpt-con2="${item.key}" data-cpt="type: viewModel.dpct.con.${item.key}.ui,name: \'con.${item.key}\',viewModel: {dpct: viewModel.dpct.con.${item.key},panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /for }}</div>{{ /target }}{{*-- tooltip轴指向编辑 --*}}{{ target: chartConfAxisPointerPanel }}TODO{{ /target }}{{*-- tooltip轴指向编辑 --*}}{{ target: chartConfLineStylePanel }}TODO{{ /target }}{{*-- tooltip轴指向编辑 --*}}{{ target: chartConfAreaStylePanel }}TODO{{ /target }}{{*-- 详细编辑板 --*}}{{ target: confEditPanel }}<div data-cpt="type: \'scrollPanel\',name: \'scrollPanel\',viewModel: {css: \'dim-sclpn\'}"><div data-cpt-sclpn-con class="dtm-edtcom-pn dtm-edtpn-pn">{{ for: ${viewModel.dpct.rows} as ${rowItem}, ${rowIndex} }}{{ if: !${rowItem.disabled} }}<div class="dtm-edtcom-row dtm-edtpn-row" data-cpt="type: \'${rowItem.ui}\',name: \'items.${rowItem.key}\',viewModel: {dpct: viewModel.dpct.rows[${rowIndex}],panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /if }}{{ /for }}</div></div><div class="dtm-edtpn-mask"></div>{{ /target }}{{*-- 内部tab编辑板 --*}}{{ target: confInnerTabPanel }}<div data-cpt="type: \'tab\',name: \'tab\',viewModel: {baseCss: \'dtm-tab2\',tabAttr: \'cpt-tab2\',conAttr: \'cpt-con2\',currentTab: lib.ob(\'${viewModel.dpct.tab[0].key}\')}"><ul class="dtm-tab2">{{ for: ${viewModel.dpct.tab} as ${item} }}<li data-cpt-tab2="${item.key}" class="dtm-tab2-${item.key}">${item.text}</li>{{ /for }}</ul>{{ for: ${viewModel.dpct.tab} as ${item}, ${tabIndex} }}<div data-cpt-con2="${item.key}" data-cpt="type: viewModel.dpct.con.${item.key}.ui,name: \'con.${item.key}\',viewModel: {dpct: viewModel.dpct.con.${item.key},panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}" class="dtm-con2"></div>{{ /for }}</div>{{ /target }}{{*-- 详细编辑单元块 --*}}{{ target: confEditBlock }}<div class="dtm-edtblk-title"></div>{{ for: ${viewModel.dpct.rows} as ${rowItem}, ${rowIndex} }}{{ if: !${rowItem.disabled} }}<div class="dtm-edtcom-row" data-cpt="type: \'${rowItem.ui}\',name: \'items.${rowItem.key}\',viewModel: {dpct: viewModel.dpct.rows[${rowIndex}],panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /if }}{{ /for }}{{ /target }}{{*-- 可折叠的详细编辑单元块 --*}}{{ target: confFoldableEditBlock }}<div class="dtm-fldedtblk-opener-pos dtm-edtitm"><div data-cpt="type: \'button\',name: \'opener\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-fldedtblk-opener\']}"></div></div><div class="dtm-fldedtblk-con"><div class="dtm-edtblk-title"></div>{{ for: ${viewModel.dpct.rows} as ${rowItem}, ${rowIndex} }}{{ if: !${rowItem.disabled} }}<div class="dtm-edtcom-row" data-cpt="type: \'${rowItem.ui}\',name: \'items.${rowItem.key}\',viewModel: {dpct: viewModel.dpct.rows[${rowIndex}],panelOpenStatus: viewModel.panelOpenStatus,residenceHandle: viewModel.residenceHandle}"></div>{{ /if }}{{ /for }}</div>{{ /target }}{{*-- 详细编辑单元 --*}}{{ target: confEditItem }}<div class="dtm-edtitm-title dtm-edtitm-tooltip" data-dsp="{{ if: !${viewModel.dpct.hideDsp} }}（${viewModel.dpct.dsp|dsp|html}）：{{ /if }}"><em><i class="dtmic-used"></i></em><span class="dtm-edtitm-title-con">${viewModel.dpct.title|html}</span></div>{{ if: ${viewModel.gadgetViewModelList.length} > 1 }}<div data-cpt="type: \'button\',name: \'gadgetSwitch\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-ggtswc\', \'dtm-edtitm-ggtswc\'],text: lib.ob(lang.string.chartEditor.gadgetSwitchBtn)}"></div>{{ /if }}<div class="dtm-edtitm-con">{{ for: ${viewModel.gadgetViewModelList} as ${vm}, ${index} }}<div data-cpt="type: \'${vm.dpct.ui}\',name: \'gadgets[${index}]\',viewModel: viewModel.gadgetViewModelList[${index}]"></div>{{ /for }}</div><div class="dtm-edtitm-mask dtm-edtitm-tooltip"></div>{{ /target }}{{*-- measrue gadget 量值编辑 --*}}{{ target: gadgetMeasureGadget }}<div class="dtm-msrggt-unit">${*viewModel.unit|ob}</div><div data-cpt="type: \'input/TextInput\',name: \'textInput0\',viewModel: {value: viewModel.value0,css: \'dtm-msrggt-tx0\',disabled: viewModel.disabled}"></div><div data-cpt="type: \'input/Slider\',name: \'slider\',viewModel: {value0: viewModel.value0,value1: viewModel.value1,min: viewModel.min,max: viewModel.max,precision: viewModel.precision,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- measrue gadget 量值编辑 --*}}{{ target: gadgetRangeMeasureGadget }}<div class="dtm-msrggt-unit">${*viewModel.unit|ob}</div><div data-cpt="type: \'input/TextInput\',name: \'textInput1\',viewModel: {value: viewModel.value1,css: \'dtm-msrggt-tx1\',disabled: viewModel.disabled}"></div><div data-cpt="type: \'input/TextInput\',name: \'textInput0\',viewModel: {value: viewModel.value0,css: \'dtm-msrggt-tx0\',disabled: viewModel.disabled}"></div><div data-cpt="type: \'input/Slider\',name: \'slider\',viewModel: {value0: viewModel.value0,value1: viewModel.value1,min: viewModel.min,max: viewModel.max,css: \'dtm-sld-has-value1\',precision: viewModel.precision,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- 开关 --*}}{{ target: gadgetBooleanGadget }}<div data-cpt="type: \'input/CheckButton\',name: \'checkButton\',viewModel: {checked: viewModel.value,dataList: viewModel.dataList,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- 颜色选择器 --*}}{{ target: gadgetColorGadget }}<div data-cpt="type: \'input/ColorPicker\',name: \'color\',viewModel: {value: viewModel.value,colorMode: viewModel.dpct.colorMode,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- 颜色选择器列表 --*}}{{ target: gadgetColorListGadget }}<div data-cpt="type: \'button\',name: \'addBtn\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-btn\', \'dtmic-addbtn\']}"></div><!-- no space--><div data-cpt="type: \'button\',name: \'removeBtn\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-btn\', \'dtmic-rmbtn\']}"></div><div data-cpt="type: \'foreach\',name: \'colorCptList\',viewModelGet: \'colorViewModelList\',itemType: \'input/ColorPicker\'"></div>{{ /target }}{{*-- 带0到1比率的颜色选择器列表 --*}}{{ target: gadgetRatioColorListGadget }}<div data-cpt="type: \'button\',name: \'addBtn\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-btn\', \'dtmic-addbtn\']}"></div><!-- no space--><div data-cpt="type: \'button\',name: \'removeBtn\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-btn\', \'dtmic-rmbtn\']}"></div><div>${lang.string.cfg.ratioColorListDesc}</div><div data-cpt="type: \'foreach\',name: \'colorCptList\',viewModelGet: \'colorViewModelList\',itemConfigAttr: \'itemConfig\'"></div>{{ /target }}{{*-- 带0到1比率的颜色选择器列表项 --*}}{{ target: gadgetRatioColorListItem }}<div class="dtm-rtclrls-itm"><div data-cpt="type: \'input/TextInput\',name: \'textInput0\',viewModel: {value: viewModel.ratioValue,css: \'dtm-rtclrls-tx\',disabled: viewModel.disabled}"></div><div data-cpt="type: \'input/ColorPicker\',name: \'color\',viewModel: {value: viewModel.colorValue,colorMode: viewModel.colorMode,css: \'dtm-rtclrls-clr\',disabled: viewModel.disabled}"></div></div>{{ /target }}{{*-- 文本输入器 --*}}{{ target: gadgetTextInputGadget }}<div data-cpt="type: \'input/TextInput\',name: \'textInput\',viewModel: {value: viewModel.value,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- 文本序列输入器 --*}}{{ target: gadgetTextListGadget }}{{ for: ${viewModel.value} as ${valueItem}, ${arrayIndex} }}<div data-cpt="type: \'input/TextInput\',name: \'textInput[${arrayIndex}]\',viewModel: {value: viewModel.value[${arrayIndex}],disabled: viewModel.disabled}"></div>{{ /for }}{{ /target }}{{*-- echarts的formatter输入器 --*}}{{ target: gadgetFormatterGadget }}<div class="dtm-fmtggt-desc">${viewModel.dpct.descHTML|raw}</div><div data-cpt="type: \'input/TextInput\',name: \'textInput\',viewModel: {value: viewModel.value,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- arrayValue输入 --*}}{{ target: gadgetArrayValueGadget }}{{ for: ${viewModel.arrayConfDpct} as ${confItem}, ${arrayIndex} }}<div class="dtm-row ${confItem.css}">{{ if: ${confItem.ggtViewModels.length} > 1 }}<div data-cpt="type: \'button\',name: \'gadgetSwitches[${arrayIndex}]\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-ggtswc\', \'dtm-arrval-ggtwc\'],text: lib.ob(lang.string.chartEditor.gadgetSwitchBtn)}"></div>{{ /if }}<span class="dtm-label">${confItem.label}:</span><div class="dtm-con {{ if: ${confItem.ggtViewModels.length} > 1 }}dtm-con-swc{{ /if }}">{{ for: ${confItem.ggtViewModels} as ${vm}, ${ggtIndex} }}<div data-cpt="type: \'${vm.dpct.ui}\',name: \'gadgets[${arrayIndex}][${ggtIndex}]\',viewModel: viewModel.arrayConfDpct[${arrayIndex}].ggtViewModels[${ggtIndex}]"></div>{{ /for }}</div></div>{{ /for }}{{ /target }}{{*-- map type select gadget --*}}{{ target: gadgetMapTypeSelectGadget }}<div class="dtm-mptysltggt-sel"></div><div class="dtm-mptysltggt-opener-pos"><div data-cpt="type: \'button\',name: \'opener\',viewModel: {disabled: viewModel.disabled,css: [\'dtm-mptysltggt-opener\']}"></div></div><div class="dtm-mptysltggt-treepn"><div data-cpt="type: \'input/CheckButton\',name: \'applyRangeSelect\',viewModelGet: \'applyRangeViewModel\'"></div><div data-cpt="type: \'input/TreeSelect\',name: \'treeSelect\',viewModel: {selected: viewModel.selected,datasource: viewModel.datasource,disabled: viewModel.disabled}"></div></div>{{ /target }}{{*-- 选择 --*}}{{ target: gadgetSelectGadget }}<div data-cpt="type: \'input/CheckButton\',name: \'checkButton\',viewModel: {checked: viewModel.value,dataList: viewModel.dataList,disabled: viewModel.disabled}"></div>{{ /target }}{{*-- css 盒模型参数输入器 --*}}{{ target: gadgetBoxStyleGadget }}<div>this is box param input!!!</div>{{ /target }}{{*-- 文字样式输入器 --*}}{{ target: gadgetTextStyleGadget }}<!-- <div data-cpt="type: \'input/Select\',name: \'fontFamily\',viewModel: {value: viewModel.fontFamily,dataList: viewModel.fontFamilyDataList,disabled: viewModel.disabled}"></div>--><!-- TODO --><!-- font size还没做 --><!-- <div data-cpt="type: \'input/Select\',name: \'fontFamily\',viewModel: {value: viewModel.fontFamily,dataList: viewModel.fontFamilyDataList,disabled: viewModel.disabled}"></div> -->{{ /target }}{{*-- 图表类型输入器 --*}}{{ target: gadgetChartTypeGadget }}<div>this is chart type input !!!</div>{{ /target }}{{*-- theme select 主题选择器 --*}}{{ target: gadgetThemeGadget }}<div class="cpt-theggt-cur"><img></div><div class="cpt-theggt-list" style="display:none;"><ul>{{ for: ${viewModel.data} as ${themeItem} }}<li data-value="${themeItem.styleId}" class="{{ if: ${themeItem.styleId} === ${viewModel.value} }} cpt-theggt-selected{{ /if }}"><img src="${themeItem.thumbnail}" title="${themeItem.styleId}"></li>{{ /for }}</ul></div><div data-cpt="type: \'button\',name: \'opener\',viewModel: {css: [\'cpt-theggt-opener\']}"></div>{{ /target }}{{*-- 主题和背景图片预览触发模板 --*}}{{ target: gadgetImageSelectGadget }}<div class="cpt-isggt-cur"><img src="${viewModel.value}"></div><div class="cpt-isggt-list" style="display: none;"><ul>{{ for: ${viewModel.data} as ${item}, ${index} }}<li class="{{ if: ${item} === ${viewModel.value} }}cpt-isggt-selected{{ /if }} {{ if: ${index} % 2 === 1 }}cpt-isggt-even{{ /if }}"><img src="${item}"></li>{{ /for }}</ul></div><div data-cpt="type: \'input/Uploader\',name: \'imageUploader\',viewModel: viewModel.imageUploader"></div><div data-cpt="type: \'button\',name: \'opener\',viewModel: {css: [\'cpt-isggt-opener\']}"></div>{{ /target }}{{*-- data editor --*}}{{ target: dataEditor }}<div class="dtm-cfg-head"><div class="dtm-cfgpn"></div><div data-cpt="type: \'input/Uploader\',name: \'excelUploader\',viewModel: viewModel.excelUploader"></div></div><div class="dtm-handsontable"></div><div class="dtm-residence-mask"></div>{{ /target }}{{*-- config panel: catval --*}}{{ target: dataConfigurerPanelCatval }}<div>catval</div>{{ /target }}{{*-- data editor --*}}{{ target: dataEditorConfigurerCatval }}<div class="dtm-axis-exchg">${lang.html.dataEditor.xAxis}：<span class="dtm-x-axis"></span><span data-cpt="type: \'button\',name: \'exchgBtn\',viewModel: {css: [\'dtm-btn\', \'dtm-exchg-btn\'],text: lib.ob(lang.string.dataEditor.exchangAxis)}"></span>${lang.html.dataEditor.yAxis}：<span class="dtm-y-axis"></span></div>{{ /target }}'
});