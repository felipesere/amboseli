#!/usr/bin/env ruby
require 'fileutils'

path_to_content = ARGV[0]
destination = ARGV[1]

Dir.children(path_to_content).each do |file|
  name_of_blog = File.basename(file, File.extname(file))
  Dir.mkdir("#{destination}/#{name_of_blog}")

  FileUtils.cp("#{path_to_content}/#{file}", "#{destination}/#{name_of_blog}/index.md")
end
