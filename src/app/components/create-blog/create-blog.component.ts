import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  blogs: Blog[] = []

  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void { }

  createBlog(inputBlogTitle: string) {
    this.service.postBlog(inputBlogTitle).subscribe((newBlog: Blog)=>{
      this.blogs.push(newBlog)
    })
    this.router.navigateByUrl('/blogs')
  }
}
