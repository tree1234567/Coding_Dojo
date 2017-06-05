class MapsController < ApplicationController
  def index
    @home = Home.last
  end
end
