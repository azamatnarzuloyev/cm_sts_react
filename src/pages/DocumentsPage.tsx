import React, { useState } from 'react';
import { Plus, Filter, Printer, FileText } from 'lucide-react';
import PrintPreview from '../components/PrintPreview';
import type { DocumentData } from '../types/documents';

const MOCK_DOCUMENTS: DocumentData[] = [
  {
    id: '1',
    type: 'invoice',
    date: new Date(),
    number: 'INV-2024-001',
    items: [
      {
        productId: '1',
        name: 'Premium Office Chair',
        quantity: 2,
        price: 299.99,
        total: 599.98,
        vat: 120
      }
    ],
    total: 599.98,
    customer: {
      name: 'Acme Corp',
      inn: '7707083893',
      address: '123 Business St, Moscow'
    },
    status: 'draft'
  }
];

const DocumentsPage = () => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentData | null>(null);

  const handlePrint = () => {
    if (selectedDocument) {
      window.print();
    }
  };

  const handleDownload = () => {
    console.log('Downloading document:', selectedDocument?.id);
  };

  const handleSend = () => {
    console.log('Sending document:', selectedDocument?.id);
  };

  return (
    <div className="flex h-full">
      {/* Document List */}
      <div className="w-1/3 border-r border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
              <Filter size={20} className="mr-2" />
              Filters
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus size={20} className="mr-2" />
              New Document
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {MOCK_DOCUMENTS.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDocument(doc)}
              className={`w-full p-4 rounded-lg border text-left transition-colors ${
                selectedDocument?.id === doc.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {doc.type.charAt(0).toUpperCase() + doc.type.slice(1)} #{doc.number}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {doc.date.toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  doc.status === 'printed'
                    ? 'bg-green-100 text-green-800'
                    : doc.status === 'sent'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {doc.customer?.name || 'No customer'}
                </span>
                <span className="font-medium">₽{doc.total.toFixed(2)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 p-6 bg-gray-50">
        {selectedDocument ? (
          <PrintPreview
            document={selectedDocument}
            onPrint={handlePrint}
            onDownload={handleDownload}
            onSend={handleSend}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <FileText size={48} className="mx-auto mb-4" />
              <p>Select a document to preview</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsPage;