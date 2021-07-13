# MY-CMD

"mycmd" is a Global Command implemented in NodeJs using File System module.

FEATURES =>

            1. Helps to "View" all files and folders inside my current Folder.
                  
                  View are of two types =>
                                            a. Tree View 
                                            b. Flat view
                                           
                  Example => a.  mycmd view <dir-name> flat
                             b.  mycmd view <dir-name> tree                       

            2. Helps to "Organize" all files and folders inside my current Folder 
               with their respected Extensions.
                  
                  It Organizes files on basis of =>  a. media 
                                                     b. images 
                                                     c. archives
                                                     d. documents
                                                     e. app
                                                     f. others
                                           
                  Example => a.  mycmd organize <dir-name>
                             b.  mycmd organize 
                             
                 Case Handled => If two Files of same Name present in Different Folder then 
                                 mycmd , rename one of the file by adding some number in begining
                                 of file name and then no duplicacy while organize.
                

TECH USED => JAVASCRIPT
