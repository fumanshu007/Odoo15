# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models


class PreviewProduct(models.Model):
    _name = 'web.webshop.preview'
    _description = 'Product Preview'

    image = fields.Image(string='Image')

    name = fields.Char(string="Name")
    preview_item = fields.Selection([('glasses', 'Eyes'), ('hat', 'Above the head')], string='Preview Location')

    def get_item(self):
        return self.preview_item
