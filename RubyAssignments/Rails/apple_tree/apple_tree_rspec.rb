require_relative 'apple_tree'
RSpec.describe Appletree do
    before(:each) do
        @apple_tree1= Appletree.new(10)
        @apple_tree2= Appletree.new(5)
        @apple_tree3= Appletree.new(0)
    end
    it 'checks for getters age,height,apples' do
        expect(@apple_tree1.age).to eq(10)
        expect(@apple_tree2.age).to eq(5)
        expect(@apple_tree3.age).to eq(0)
        expect(@apple_tree1.height).to eq(1.0)
        expect(@apple_tree2.height).to eq(1.0)
        expect(@apple_tree3.height).to eq(1.0)
        expect(@apple_tree1.apples).to eq(0)
        expect(@apple_tree2.apples).to eq(0)
        expect(@apple_tree3.apples).to eq(0) 
    end
    it 'checks to make sure that the height and apples cannot be modified' do
        expect{@apple_tree1.height = 50.0}.to raise_error(NoMethodError)
        expect{@apple_tree2.height = 10.0}.to raise_error(NoMethodError)
    end
    it 'checks to make sure only tree between age 3 and 10 can produce apples' do
        @apple_tree1.year_gone_by
        expect(@apple_tree1.apples).to eq(0)
        @apple_tree2.year_gone_by
        expect(@apple_tree2.apples).to eq(2)
        @apple_tree3.year_gone_by
        expect(@apple_tree3.apples).to eq(0) 
    end
    it 'checks to see if the height and age increase with year_gone_by' do
        @apple_tree1.year_gone_by
        expect(@apple_tree1.age).to eq(11)
        expect(@apple_tree1.height).to eq(1.1)
    end

    it "checks to see if pick_apples works on a tree that makes apples" do
        @apple_tree2.year_gone_by
        expect(@apple_tree2.apples).to eq(2)
        @apple_tree2.pick_apples
        expect(@apple_tree2.apples).to eq(0)
    end

end