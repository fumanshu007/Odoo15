# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models


class PreviewProduct(models.Model):
    _inherit = 'product.template'

    preview_id = fields.Many2one('web.webshop.preview', 'Preview')
