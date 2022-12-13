from odoo.tests.common import TransactionCase
from odoo.exceptions import UserError
from odoo.tests import tagged

# The CI will run these tests after all the modules are installed,
# not right after installing the one defining it.
@tagged('post_install', '-at_install')
class PreviewTestCase(TransactionCase):

    @classmethod
    def setUpClass(cls):
        # add env on cls and many other things
        super(PreviewTestCase, cls).setUpClass()

        # create the data for each tests. By doing it in the setUpClass instead
        # of in a setUp or in each test case, we reduce the testing time and
        # the duplication of code.
        cls.product = cls.env['product.template'].create({'name': 'Good Glasses'})
        cls.preview = cls.env['web.webshop.preview'].create({'name': 'glasses', 'preview_item': 'glasses'})

    def test_creation_area(self):
        """Test that the total_area is computed like it should."""
        self.product.preview_id = self.preview
        self.assertRecordValues(self.product.preview_id, [{'name': 'glasses', 'preview_item': 'glasses'}])
