describe('Product page is rendered correctly', () => {
    it('It should returns 404 when the product is not existed', () => {
        cy.request({
            url: '/non-existent-slug',
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.contains('Page Not Found');
        });
    });
    it('It should return 404 when the product is disabled', () => {
        cy.request({
            url: '/striped-cotton-sweater',
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.contains('Page Not Found');
        });
    });
});
export {};
//# sourceMappingURL=productView.test.js.map