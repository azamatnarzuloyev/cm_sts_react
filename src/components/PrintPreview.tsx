import React from 'react';
import { Printer, Download, Send } from 'lucide-react';
import type { DocumentData } from '../types/documents';

interface PrintPreviewProps {
  document: DocumentData;
  onPrint: () => void;
  onDownload: () => void;
  onSend: () => void;
}

const PrintPreview: React.FC<PrintPreviewProps> = ({
  document,
  onPrint,
  onDownload,
  onSend,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">
          {document.type.charAt(0).toUpperCase() + document.type.slice(1)} #{document.number}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={onPrint}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            <Printer size={20} />
          </button>
          <button
            onClick={onDownload}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            <Download size={20} />
          </button>
          <button
            onClick={onSend}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      <div className="p-6 bg-white">
        {/* Document Header */}
        <div className="mb-8">
          <div className="text-gray-600 mb-1">Date: {document.date.toLocaleDateString()}</div>
          {document.customer && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-1">Customer</h3>
              <p className="text-gray-600">{document.customer.name}</p>
              {document.customer.inn && (
                <p className="text-gray-600">INN: {document.customer.inn}</p>
              )}
              {document.customer.address && (
                <p className="text-gray-600">{document.customer.address}</p>
              )}
            </div>
          )}
        </div>

        {/* Items Table */}
        <table className="w-full mb-8">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="pb-3">Item</th>
              <th className="pb-3 text-right">Quantity</th>
              <th className="pb-3 text-right">Price</th>
              <th className="pb-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {document.items.map((item, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-3">{item.name}</td>
                <td className="py-3 text-right">{item.quantity}</td>
                <td className="py-3 text-right">₽{item.price.toFixed(2)}</td>
                <td className="py-3 text-right">₽{item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200 font-medium">
              <td colSpan={3} className="py-3 text-right">Total:</td>
              <td className="py-3 text-right">₽{document.total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        {/* Footer */}
        <div className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
          <p>Thank you for your business!</p>
          <p className="mt-2">
            For questions about this document, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintPreview;