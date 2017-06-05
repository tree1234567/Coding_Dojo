require_relative 'bank_account'
RSpec.describe BankAccount do
    before(:each) do
       @account1 = BankAccount.new
       @account1.deposit('checking', 20) 
    end

    it "raise error for withdrawing too much money" do
        expect{@account1.withdraw('checking', 21)}.to raise_error(Insufficientfund)
        
    end

    it 'raises an error for trying to check the amount of bank accounts' do
        expect{@account1.total_accounts}.to raise_error(NoMethodError)
    end
    it 'raises an error for trying to check the amount of bank accounts' do
        expect{@account1.interest_rate = 5}.to raise_error(NoMethodError)
    end






end