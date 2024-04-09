class CreateTwin {
  constructor(params = {}) {
    const {
      logPosTargetBool = false,
      helperBool = true,//默认创建辅助开发工具
    } = params;
    if (helperBool) {
      this.helper = new Helper(this.scene, this.directionalLight);
      this.gui = this.helper.gui;
    }
  }
}
// 渲染循环
this.renderer.setAnimationLoop(() => {
  if (helperBool) this.helper.stats.update();
  this.renderer.render(this.scene, this.camera);
})
