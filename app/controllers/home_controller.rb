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

    def test1
    respond_to do |format|
        format.html 
       # format.json { render json: @spot }
      end
    end

  def test
    respond_to do |format|
        format.html 
       # format.json { render json: @spot }
      end
    end

  def test_box
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


  def test_smart
    #respond_to do |format|
    #    format.html # show.html.erb
    #    format.json { render json: @spot }
    #  end
    #end
    @spots = Spot.all

    hash = {:test => "YOYO"}

    #render json: params
    render json: @spots
  end

end
