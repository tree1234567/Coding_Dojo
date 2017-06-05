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
                raise Insufficientfund.new
                
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
    
    def account_info
        puts "CHECKING: "+ @checking.to_s + " | SAVINGS: "+ @savings.to_s + " | ACCOUNT # " + @account_num
        self
    end

    private
    def interest_rate
        @interest_rate = 0.01
    end
    def total_accounts
        puts @@total_accounts
    end
end

class Insufficientfund < StandardError
end