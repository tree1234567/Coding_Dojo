class TimesController < ApplicationController
  def main
    t = Time.now
    @time = t.strftime '%b %d, %Y %H:%M:%S'
  end
end
