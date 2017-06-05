class Project
  attr_accessor :name, :description, :owner, :tasks
  def initialize name, description, owner
    @name = name
    @description = description
    @owner = owner
    @tasks = []
  end
  def elevator_pitch
    "#{@name}, #{@description}"
  end

  def new_task(task)
    @tasks.push(task)
  end

  def show_tasks
      @tasks.each do |task|
          puts task
      end
    end
end

