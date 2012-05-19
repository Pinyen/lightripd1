class HomeController < ApplicationController
  def index
  end
  def attr
  	respond_to do |format|
      format.html # show.html.erb
     # format.json { render json: @spot }
    end
  end

  def smart
  	respond_to do |format|
        format.html # show.html.erb
       # format.json { render json: @spot }
      end
    end

  def test
    respond_to do |format|
        format.html 
       # format.json { render json: @spot }
      end
    end

  def step3
    #respond_to do |format|
    #    format.html # show.html.erb
    #    format.json { render json: @spot }
    #  end
    #end
    

    hash = {:test => "YOYO"}

    render json: params

  end


end
