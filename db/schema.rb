# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161012145611) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",             null: false
    t.integer  "author_id",        null: false
    t.integer  "team_id",          null: false
    t.integer  "commentable_id",   null: false
    t.string   "commentable_type", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["commentable_id", "commentable_type"], name: "index_comments_on_commentable_id_and_commentable_type", using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "author_id",   null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "team_id",     null: false
  end

  add_index "projects", ["author_id"], name: "index_projects_on_author_id", using: :btree
  add_index "projects", ["team_id"], name: "index_projects_on_team_id", using: :btree

  create_table "teams", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "teams", ["name"], name: "index_teams_on_name", unique: true, using: :btree

  create_table "todos", force: :cascade do |t|
    t.string   "title",                        null: false
    t.text     "description"
    t.boolean  "done",         default: false
    t.datetime "due_date"
    t.integer  "author_id",                    null: false
    t.integer  "todoer_id",                    null: false
    t.integer  "project_id",                   null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.datetime "completed_at"
  end

  add_index "todos", ["title", "author_id", "todoer_id", "project_id"], name: "index_todos_on_title_and_author_id_and_todoer_id_and_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.integer  "team_id",         null: false
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
