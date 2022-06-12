export default function sidebar() {
  return [
    {
      text: 'Basics',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/basics/introduction' },
        { text: 'Accounting Basics', link: '/basics/accounting-basics' },
      ],
    },
    {
      text: 'Setting Up',
      collapsible: true,
      items: [
        { text: 'Setup New Company', link: '/setting-up/setup-new-company' },
        { text: 'Initial Entries', link: '/setting-up/initial-entries' },
        { text: 'Opening Balances', link: '/setting-up/opening-balances' },
      ],
    },
    {
      text: 'Transactions',
      collapsible: true,
      items: [
        { text: 'Sales Invoices', link: '/transactions/sales-invoices' },
        { text: 'Purchase Invoices', link: '/transactions/purchase-invoices' },
        { text: 'Payments', link: '/transactions/payments' },
        { text: 'Journal Entries', link: '/transactions/journal-entries' },
      ],
    },
    {
      text: 'Analytics',
      collapsible: true,
      items: [
        { text: 'Dashboard', link: '/analytics/dashboard' },
        { text: 'Reports', link: '/analytics/reports' },
      ],
    },
    {
      text: 'Entries',
      collapsible: true,
      items: [
        { text: 'Items', link: '/entries/items' },
        { text: 'Party', link: '/entries/party' },
        { text: 'Taxes', link: '/entries/taxes' },
      ],
    },
    {
      text: 'Tools',
      collapsible: true,
      items: [
        { text: 'Search', link: '/tools/search' },
        { text: 'Data Import', link: '/tools/data-import' },
      ],
    },
  ];
}
