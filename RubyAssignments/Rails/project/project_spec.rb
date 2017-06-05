require_relative 'project'
RSpec.describe Project do
    before(:each) do 
        @project1 = Project.new('Project1', 'description1', 'John Doe')
        @project2 = Project.new('Project 2', 'description 2','Jane Doe')
    end

    it 'has a getter and setter for name attribute' do 
        @project1.name = 'Changed Name'
        expect(@project1.name).to eq('Changed Name')
    end

    it 'has a method elevator_pitch to explain name and description' do
        expect(@project2.elevator_pitch).to eq('Project 2, description 2')
    end

    it 'has an owner upon initialization' do
        expect(@project1.owner).to eq('John Doe')
        expect(@project2.owner).to eq("Jane Doe")
    end

    it 'has tasks array initialzed to be empty' do
        expect(@project1.tasks).to eq([])
        expect(@project2.tasks).to eq([])
    end

    it 'has can add tasks to the task array' do
        @project1.new_task('New Task')
        expect(@project1.tasks).to eq(['New Task'])
        @project2.new_task('New Task2')
        expect(@project2.tasks).to eq(['New Task2'])
    end

    it 'should print out all the items in the tasks array' do 
        @project1.new_task('New Task')
        @project1.new_task('New Task2')
        @project1.new_task('New Task3')
        expect{@project1.show_tasks}.to output("New Task\nNew Task2\nNew Task3\n").to_stdout
    end
end

