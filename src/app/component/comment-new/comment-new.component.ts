import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Comment } from 'src/app/model/Comment';
import { CommentsService } from 'src/app/service/comments.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})

export class CommentNewComponent implements OnInit {

  comment: Comment = new Comment();
  project: any;
  userDetails: any;

  constructor(

    private router: Router, 
    private route: ActivatedRoute, 
    public dialog: MatDialog,
    private authService: AuthService,
    private usersService: UsersService,
    private projectsService: ProjectsService, 
    private commentService: CommentsService

  ) {}

  ngOnInit() {

    const projectId = +this.route.snapshot.params['id'];

    this.projectsService.getProject(projectId).subscribe(data => {

      this.project = data;

    });

    this.userDetails = this.authService.decodeAuthenticatedUserToken();

    if (this.userDetails) {

      this.usersService.getUser(this.userDetails.userId).subscribe((user: any) => { this.userDetails = user; })

    }

  }

  newComment() {

    const currentDate = new Date();

    const newComment = {

      userId: this.userDetails,
      projectId: this.project,
      dateAdded: currentDate,
      content: this.comment.content
    }

    console.log(newComment);
    
    this.commentService.newComment(newComment);

    this.navigateToDashboard();

  }

  cancelInsert() { this.navigateToDashboard(); }

  navigateToDashboard() { this.router.navigate(['/dashboard']); }

}
