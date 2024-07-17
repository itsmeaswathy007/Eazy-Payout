import React from 'react';

const Header = ({ companies, accounts, selectedCompany, selectedAccount, onCompanyChange, onAccountChange }) => {
  return (
    <header className="header">
      <select
        value={selectedCompany}
        onChange={(e) => onCompanyChange(e.target.value)}
        placeholder="Company Name"
      >
        <option value="" disabled>Company Name</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
      <select
        value={selectedAccount}
        onChange={(e) => onAccountChange(e.target.value)}
        placeholder="Account Name"
        disabled={!selectedCompany}
      >
        <option value="" disabled>Account Name</option>
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
