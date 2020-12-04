describe('Webcheck', () => {
    it('should ', function () {
        browser.url("https://www.google.com/");
        let logo = $('[src="/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif"]');
        if (!logo.isExisting()) {
            throw new Error('You have some problem ');
        }
        console.log('Some thing');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21va2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3NwZWNzL3Ntb2tlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLEVBQUUsQ0FBQyxTQUFTLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLG9GQUFvRixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUE7U0FDNUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRzdCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUEifQ==