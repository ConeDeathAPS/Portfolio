require 'sinatra'

class Project < Sinatra::Base
end

get '/' do
	erb :index
end

get '/projects' do
	erb :projects
end

get '/music' do
	erb :music
end

get '/project' do
	erb :in_progress
end

get '/bio' do
	erb :in_progress
end

get '/favicon.ico' do
	redirect "images/favicon.ico"
end