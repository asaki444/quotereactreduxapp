class Api::QuotesController < ApplicationController
  def index
   @quotes = Quote.all
   render json: @quotes
  end

  def create
    author = Author.find_or_create_by(name: quote_params[:author])
    quote = Quote.new(text: quote_params[:text], author_id: author.id)
    quote.save
    render json: quote
  end

  private

  def quote_params
    params.require(:quote).permit(:text, :author)
  end

end
