require './config/environment'
require 'sinatra'
require_relative './app/controllers/application_controller.rb'

# if ActiveRecord::Migrator.needs_migration?
#   raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
# end

use Rack::MethodOverride

run ApplicationController.new
use SignupController
use SessionController
use ChildrenController
use LogController
