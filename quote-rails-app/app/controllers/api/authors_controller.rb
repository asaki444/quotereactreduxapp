class Api::AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render json: @authors
  end

  def show
    @author = Author.find_by(id: author_id)
    render json: @author
  end

end
