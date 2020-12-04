describe('Webcheck', () => {
    it('should ', function () {
        browser.url("https://www.google.com/")
        let logo = $('[src="/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif"]');
        if (!logo.isExisting()) {
            throw new Error('You have some problem ')
        }


    });
})