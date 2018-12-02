<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Posts as PostsResource;
use App\Posts;

class PostsController extends Controller
{
    public function show($id)
    {
      return new PostsResource(Posts::findOrFail($id));
    }

    public function showAll()
    {
      $posts = Posts::all();
      return $posts;
    }

    public function createPost($image_url, $content)
    {
     Posts::create(["image_url"=> $image_url,"content"=>$content]);
    }
}