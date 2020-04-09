export default async ({ app }) => {
  await app.router.afterEach(() => {
    app.store.commit('asideMobileStateToggle', false)
  })
}
