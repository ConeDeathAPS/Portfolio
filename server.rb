require 'sinatra'

class Project < Sinatra::Base
end

set :public_dir, 'public'

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
	erb :bio
end

get '/favicon.ico' do
	redirect "images/music.ico"
end