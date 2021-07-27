export interface TStore {
  /**
   * @description 选中工具条模块的keys
   */
  resumeToolbarKeys: string[];
  /**
   * @description 模块列表
   */
  templateList: TSTemplate.Item[];
  /**
   * @description 选中当前模块
   */
  selectTemplate: TSTemplate.Item;
}

const templateModel = {
  namespace: "templateModel",
  openSeamlessImmutable: true,
  state: {
    resumeToolbarKeys: [],
    templateList:[],
    selectTemplate: {
      templateId: '',
      templateName: '',
      templateCover: '',
      templateIndex: -1,
    },
  },
}

export default templateModel;