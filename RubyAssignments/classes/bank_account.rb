# BankAccount should have a method that returns a user's account number, account number should be generated by a private method, account number should be random 

# BankAccount should have a method that returns the user's checking account balance 

# BankAccount should have a method that returns the user's saving account balance 

# BankAccount should allow a user to deposit money into either their checking or saving account 

# BankAccount should allow a user to withdraw money from one of their accounts, return an error if there are insufficient funds 

# BankAccount should allow the user to view the total amount of money they have at the bank 

# BankAccount should track how many accounts the bank currently has Add an interest_rate attribute that is not accessible by the user. Set it to 0.01 

# BankAccount should have a method called account_information that displays the users account number, total money, checking account balance, saving account balance and interest rate 

# A user should not be able to set any attributes from the BankAccount class






class BankAccount
    @@total_accounts= 0
    def initialize
        @account_num = rand(10 ** 10).to_s
        @checking    = 0
        @savings     = 0
        @@total_accounts+=1
    end
    def account_num
        puts @account_num
        self
    end
    def checking_inquiry
        puts @checkings
        self    
    end
    def savings_inquiry
        puts @savings
        self
    end
    def deposit (account, amount)
        if (account == "checking")
            @checking += amount
        elsif (account == "savings")
            @savings += amount 
        end
        self
    end
    def withdraw (account, amount)
        if (account == "checking")
            if (@checking > amount)
                @checking -= amount 
            else
                puts "You are withdrawing to much money from %s" % account
            end
        elsif (account == "savings")
            if (@savings > amount)
                @savings -= amount
            else
                puts "You are withdrawing to much money from %s" % account
            end
        else
            puts "Not account named %s" % account
        end 
        self         
    end
    def total_money
        puts @savings+@checking
    end
    def total_accounts
        puts @@total_accounts
    end
    
    def account_info
        puts "CHECKING: "+ @checking.to_s + " | SAVINGS: "+ @savings.to_s + " | ACCOUNT # " + @account_num
        self
    end



    private
    def interest_rate
        @interest_rate = 0.01
    end

    

end

customer = BankAccount.new

customer.deposit("savings", 20).deposit("checking", 32)
customer.account_info