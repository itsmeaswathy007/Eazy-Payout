import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Balance from './components/Balance';
import Transactions from './components/Transactions';

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [companies] = useState([
    { id: 'company1', name: 'Company 1' },
    { id: 'company2', name: 'Company 2' }
  ]);
  const [accounts] = useState([
    { companyId: 'company1', id: 'account1', name: 'Account 1' },
    { companyId: 'company1', id: 'account2', name: 'Account 2' },
    { companyId: 'company2', id: 'account3', name: 'Account 3' },
    { companyId: 'company2', id: 'account4', name: 'Account 4' }
  ]);
  const [transactions] = useState([
    { accountId: 'account1', date: '07/05/2024 01:04 PM', credit: '₹21,337', acBalance: '₹21,337', utr: '1000000', acNo: 'ACOCF7RRUY407QHU' },
    { accountId: 'account1', date: '04/05/2024 12:38 PM', credit: '₹21,337', acBalance: '₹21,337', utr: 'CMS4136431811', acNo: '0104SLNEFTPL' },
    { accountId: 'account2', date: '28/03/2024 05:09 PM', credit: '₹21,337', acBalance: '₹21,337', utr: 'CMS4019645011', acNo: 'ACT861V1M9RR67Z5C' },
    { accountId: 'account2', date: '28/03/2024 05:09 PM', credit: '₹5,015.69', acBalance: '₹5,015.69', utr: 'CMS5398666735', acNo: 'ACOCF7RRUY407QHU' },
    { accountId: 'account3', date: '19/03/2024 11:33 PM', credit: '₹5,015.69', acBalance: '₹5,015.69', utr: 'CMS3948064984', acNo: 'ACT861V1M9RR67Z5C' },
    { accountId: 'account4', date: '19/03/2024 11:33 PM', credit: '₹16,000', acBalance: '₹16,000', utr: 'CMS3938564916', acNo: 'ACOCF7RRUY407QHU' }
  ]);

  const handleCompanyChange = (companyId) => {
    setSelectedCompany(companyId);
    setSelectedAccount('');
  };

  const handleAccountChange = (accountId) => {
    setSelectedAccount(accountId);
  };

  const filteredAccounts = accounts.filter(account => account.companyId === selectedCompany);
  const filteredTransactions = transactions.filter(transaction => transaction.accountId === selectedAccount);

  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <Header
          companies={companies}
          accounts={filteredAccounts}
          selectedCompany={selectedCompany}
          selectedAccount={selectedAccount}
          onCompanyChange={handleCompanyChange}
          onAccountChange={handleAccountChange}
        />
        <Balance />
        <Transactions transactions={filteredTransactions} />
      </main>
    </div>
  );
};

export default App;
