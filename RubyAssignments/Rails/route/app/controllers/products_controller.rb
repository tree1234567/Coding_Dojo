class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def new
  end
  def create
    @product = Product.create(name: params[:name], price: params[:price])
    redirect_to '/products/index'
  end
end
